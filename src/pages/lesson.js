import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Lead, SectionSub } from "../components/wrapper"
import { Head3 } from "../components/heading"
import { SubpageSection } from "../components/subpage_section"
import { Pagenations } from "../components/pagenation"
import LessonCoverWrapper from "../components/lesson_cover"
import image from "../images/ogp3.jpg";

export const Lesson = () => {
  return (
    <Layout>
      <LessonCoverWrapper />
      <SectionSub id="授業紹介">
        <Head3 title="授業紹介" engtitle="Introduction of the Lesson" />
        <Lead>
          近年、デザインはコモディティ化し、デザイナー以外にも開かれるようになりました。文化的に豊かであることや、ビジネスを最適化するために、様々な人々がデザインを用いるべきであることに気付き始めたのです。<br></br>そういった時代背景の中、東京大学の学生がデザインをリテラシーとして身につけ、それによってデザインの未踏領域で新たな価値を創造してほしい。そんな思いを持った講義です。<br></br>各講義では、座学とワークショップを組み合わせ、教養としてのデザインを身に付けていくことを目標としています。ここではそれぞれの講義で受講生が何を学んだかについて紹介します。
        </Lead>
      </SectionSub>
      <SubpageSection id="第1回" title="第1回：グラフィックデザイン史" filename="lesson_1.jpg">
        <p>グラフィックデザインの歴史的文脈を踏まえることで、現代のグラフィックデザインのデジタル中心・機能性重視という特徴を浮き彫りにしていきました。<br></br>具体的には、産業革命後のヨーロッパで台頭したアーツ・アンド・クラフツ運動を紹介し、その後20世紀ドイツを中心とした活字文化や美術工芸学校バウハウスの誕生など、より実用性の高くシンプルなデザインが発展する様子を学びました。さらに大戦期のプロパガンダとデザインの関連性や、戦後の広告についても注目しました。</p>
      </SubpageSection>
      <SubpageSection id="第2回" title="第2回：色・配置" filename="lesson_2.jpg">
        <p>色の色相・明度・彩度といった三属性や、色が与える心理的効果を理解し、色相環の中での色の関係性について紹介しました。さらに、色が社会の中でどのように使用されているかを観察する中で、用途に合わせた配色ができるようになりました。<br></br>配置については、近接・整列・反復・コントラストといったデザインの４原則やプレグナンツ法則など、配置の工夫による視覚的な効果や情報の優先順位について学びました。また、文字の配置としてカーニングにも触れました。</p>
      </SubpageSection>
      <SubpageSection id="第3回" title="第3回：フォント" filename="lesson_3.jpg">
        <p>「フォントとは何か？」から始まり、セリフ体・サンセリフ体、明朝体・ゴシック体の違いや、プロポーショナルフォント・等幅フォントなど、フォントの種類について学びました。様々なフォントについて学んだのち、フォントが与える印象に注目しました。授業終盤では実際に企業やブランドのロゴをフォントを使って再現していく過程を観察しました。</p>
      </SubpageSection>
      <SubpageSection id="第4回" title="第4回：写真" filename="lesson_4.jpg">
        <p>デザインにおける写真の役割について再確認したのち、カメラの機構やF値・シャッタースピード・ISO感度などの設定項目について学びました。さらに実際の写真を題材に構図の比較を行い、それぞれの構図によって被写体がどのように写りどのような印象を与えるかについて考えました。<br></br>授業の最後はInstagramなど一般的なアプリに付随している編集機能を用いて、授業で扱った項目を意識しながら実際に画像編集に取り組みました。</p>
      </SubpageSection>
      <SubpageSection id="第5回" title="第5回：UI" filename="lesson_5.jpg">
        <p>ユーザーが製品やサービスを使う際に実際に目で見て操作する部分に相当するUIのデザインについて、CUIの時代からGUIの登場、近年のスマートフォンの普及に伴う変化を踏まえて歴史を追いました。その後、アフォーダンス・シグニファイアといったUIを設計する上で必要な視点や、AppleやGoogleが提唱するUIデザイン定義に触れ、実際のアプリ・WebサイトのUI設計の過程についても学びました。</p>
      </SubpageSection>
      <SubpageSection id="第6回" title="第6回：UX" filename="lesson_6.jpg">
        <p>これまでの授業で扱ったデザインの上流工程に該当するUX。UXの正式な定義に触れつつ「何かを使うときの体験」と大雑把に捉えた上で、製品・サービスのユーザーの人物像を正確に捉えるべく5W1Hの要素に注目しました。5W1Hの中で、例えばWhoを詳細に捉えるためのペルソナ設定や、Howを設計するためのカスタマージャーニー、Whyを把握するためのペイン・ゲイン・ベネフィットといったフレームワークを学びました。ワークショップでは実在のアプリやウェブサイトを取り上げ、UI・UXについて分析しました。</p>
      </SubpageSection>
      <SectionSub id="pagenation">
        <Pagenations nexttext="最終成果物ギャラリー" nextlink="/gallery" />
      </SectionSub>
    </Layout>
  );
};

export default Lesson;