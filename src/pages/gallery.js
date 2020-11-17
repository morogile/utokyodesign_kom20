import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Lead, SectionSub, SubpageImgWrapper } from "../components/wrapper"
import { Head3 } from "../components/heading"
import { SubpageSection } from "../components/subpage_section"
import { Pagenations } from "../components/pagenation"
import lessoncover from "../images/lesson_cover.jpg";
import styled from "styled-components"
import image from "../images/ogp2.jpg";

const Label = styled.p`
  display: inline-block;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 150%;
  letter-spacing: 0.07em;
  color: white;
  padding: 4px 11px;
  margin: 20px 0 10px 0;
  background-color: var(--color-skyblue);
`;

export const Gallery = () => {
  return (
    <Layout>
      <SEO title="学生の作品" image={image} />
      <SubpageImgWrapper link={lessoncover} />
      <SectionSub id="学生の作品">
        <Head3 title="学生の作品" engtitle="Gallery" />
        <Lead>
        グラフィックデザイン概論では最終課題として、講義で学んだことを実際に作品にする機会があります。今年度の最終課題のテーマは、「東大を紹介するアプリ・ウェブサイトのデザイン」。座学とワークショップで養ったデザインの知識と理解をフル活用しながら、より質の高いアウトプットを目指してグループごとに制作に取り組みました。<br></br>ここではその最終成果物を、実際の受講生のコメントと合わせて紹介します。
        </Lead>
      </SectionSub>
      <SubpageSection id="KOMAP" title="新入生向け駒場紹介アプリ" filename="group_1.jpg">
        <Label>作ったもの</Label>
        <p>私たちが今回デザインしたのはwith corona時代の新入生向け汎用駒場紹介アプリ「KOMAP」です。入学後キャンパスにあまり来れず知り合いも少ない、履修の仕方もわからないしUTASにITC-LMSに大学のHPに一体どれを見たらいいのかわからない…！という新入生をペルソナにしており、こまっけろ視点で動ける3Dキャンパスマップからシケプリ倉庫まで新入生お役立ち情報が網羅できるスマホ用アプリになっています。また画面下部のこまっけろアイコンから大学関連サイトに飛ぶことができます。</p>
        <Label>工夫</Label>
        <p>アプリ画面全体として親しみのある東京大学のロゴに使われていてダイアードに当たる二色をメインカラーとアクセントカラーに用いて視認性を意識しながら統一感を出しました。親しみやすさ＝柔らかさを感じられるフォントを用い、学生がいち早く知りたいであろう補講休講情報は視線も集中しやすくタップしやすい画面右下に配置し、その通知がこまっけろの帽子の色でわかるようにしました。またロゴのOを貫くコンパスは新入生にとっての地図となる当アプリの象徴であり文字に立体感を与えています。</p>
      </SubpageSection>
      <SubpageSection id="novel-game" title="東大の大学システムを学べるノベルゲーム" filename="group_2.jpg">
        <Label>作ったもの</Label>
        <p>東京大学の進振りシステムをメインとした、前期課程の大学生活を楽しく学習できるノベルゲームです。<br></br>文科一類〜理科三類までの男女計12人を登場させ、好きなキャラクターを選んで育成ができます。また、登場人物の間で恋愛をしたり、学園祭などのイベントを交えたりしながら、科類ごとの前期課程体験ができます。ゲームの舞台は入学式から進振り決定までの約１年半で、エンディングは進学先の内定です。<br></br>ユーザー層としては、進振りシステムがよくわからないという東京大学の新入生や、大学選びに困っている高校生、東京大学を受験しようと考えている受験生などを念頭においています。コロナ禍において先輩から情報を得ることが難しくなっている状況で、人生を左右するかもしれない進振りについて詳しくなりたいという需要があると考えたため、上記の層に気軽に利用してもらえるようなゲームを制作しました。</p>
        <Label>工夫</Label>
        <p>ユーザーに気軽に利用してもらうために、ゲーム内の文字にはポップな印象のあるサンセリフ体である「851マカポップ」というフォントを使用しました。<br></br>画面によって受ける印象が異ならないよう、東京大学の校章に使われている青と黄をメインカラーとし、文科一類〜理科三類まで科類ごとにテーマカラーを、色番を指定して決めた。各画面に出てくる銀杏などの装飾もこれらのカラーに則って制作しました。<br></br>ホーム画面では、ひと目見てすぐにわかるよう、また画面が散らからないようにアイコンを配置しました。また、ボタンなどはそれがボタンであるとわかるように影をつけました。<br></br>プレイ後に、「進振りについてよく分かった」をユーザーに思ってもらえるように、できる限りわかりやすく、かつ網羅的に大学生活を体験できるアプリを目指しました。</p>
      </SubpageSection>
      <SubpageSection id="introduction-website" title="高校生への東大紹介Webサイト" filename="group_3.jpg">
        <Label>作ったもの</Label>
        <p>東大に入ることをなんとなくイメージしているけど、どんなところなのかわからない高校生のためのWebサイトをデザインしました。東大に入ってからの「思っていたのと違った…」という感覚をなくすのが目的です。学生の目線から伝えることを意識しています。</p>
        <Label>工夫</Label>
        <p>紹介となるとどうしても文字数が多くなってしまうため、シンプルなフォントを使いました。「駒場生の一日」「駒場生の一年」では左に時間軸を表す図形を設け、F字型の視線誘導ができるようにしました。トップページから各ページに遷移するボタンは影をつけて「押せる感」を表現しました。Q&Aは「掲示板・落書き」をイメージしてメモ帳のような作りにしました（メモ帳の質感を付与できるともっとらしくなったと思うのですが、時間がなくそこまで至りませんでした…）</p>
      </SubpageSection>
      <SubpageSection id="campus-map" title="こども向け駒場キャンパスマップ" filename="group_4.jpg">
        <Label>作ったもの</Label>
        <p>親子で駒場祭に来た人を対象とした子供向けキャンパスマップです。普通のパンフレットが難しくて読めない子楽しめるように、駒場キャンパスの見所をわかりやすくまとめました。</p>
        <Label>工夫</Label>
        <p>配色は駒場祭の雰囲気に合わせた黄色やオレンジを中心に、やさしい色で統一しました。また、写真ではなくデフォルメ調のイラストを使うことで親しみやすい雰囲気にしています。子供が読めるように、漢字にはルビを振りました。</p>
      </SubpageSection>
      <SectionSub id="pagenation">
        <Pagenations nexttext="授業紹介" nextlink="/lesson" />
      </SectionSub>
    </Layout>
  );
};

export default Gallery;