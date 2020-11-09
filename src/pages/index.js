import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Head1, Head2 } from "../components/heading"
import { Section, Top1, Top1box, DeskContainer } from "../components/wrapper"
import { LinkButton, ExternalLink } from "../components/link"
import Desk from "../components/desk"

const IndexPage = () => (
  <Layout>
    <SEO title="ホーム" />
    <article>
      <Section id="グラフィックデザイン概論とは">
        <Head1 title="グラフィックデザイン概論とは" />
        <Top1>
          <Top1box>
            <p>近年、デザインはコモディティ化し、デザイナー以外にも開かれるようになりました。<br></br>文化的に豊かであることや、ビジネスを最適化するために、様々な人々がデザインを用いるべきであることに気付き始めたのです。<br></br>そういった時代背景の中、東京大学の学生がデザインをリテラシーとして身につけ、それによってデザインの未踏領域で新たな価値を創造してほしい。そんな思いを持った講義です。</p>
            <ExternalLink link="http://u-tokyo.design/" text="公式Webサイトへ" />
          </Top1box>
          <DeskContainer>
            <Desk />
          </DeskContainer>
        </Top1>
      </Section>
      <Section id="授業紹介">
        <Head1 title="授業紹介" />
        <Top1>
          <Top1box>
            <Head2 titlepre="第1回" title="グラフィックデザイン史" />
            <p>グラフィックデザインの歴史的文脈を踏まえることで、現代のグラフィックデザインのデジタル中心・機能性重視という特徴を浮き彫りにしていきました。<br></br>具体的には、産業革命後のヨーロッパで台頭したアーツ・アンド・クラフツ運動を紹介し、その後20世紀ドイツを中心とした活字文化や美術工芸学校バウハウスの誕生など、より実用性の高くシンプルなデザインが発展する様子を学びました。さらに大戦期のプロパガンダとデザインの関連性や、戦後の広告についても注目しました。</p>
          </Top1box>
          <DeskContainer>
            <Desk />
          </DeskContainer>
        </Top1>
        <Top1>
          <Top1box>
            <Head2 titlepre="第2回" title="色・配置" />
            <p>色の色相・明度・彩度といった三属性や、色が与える心理的効果を理解し、色相環の中での色の関係性について紹介しました。さらに、色が社会の中でどのように使用されているかを観察する中で、用途に合わせた配色ができるようになりました。<br></br>配置については、近接・整列・反復・コントラストといったデザインの４原則やプレグナンツ法則など、配置の工夫による視覚的な効果や情報の優先順位について学びました。また、文字の配置としてカーニングにも触れました。</p>
          </Top1box>
          <DeskContainer>
            <Desk />
          </DeskContainer>
        </Top1>
        <LinkButton link="/lesson" text="続きを読む" />
      </Section>
      <Section id="学生の作品">
        <Head1 title="学生の作品" />
        <LinkButton link="/lesson" text="ギャラリーへ" />
      </Section>
      <Section id="ワークショップについて">
        <Head1 title="ワークショップについて" />
      </Section>
      <Section id="お問い合わせ">
        <Head1 title="お問い合わせ" />
      </Section>
    </article>
  </Layout>
)

export default IndexPage
