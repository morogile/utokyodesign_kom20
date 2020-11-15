module.exports = {
  siteMetadata: {
    title: `東京大学 グラフィックデザイン概論 駒場祭特設サイト`,
    description: `グラフィックデザイン概論は、東京大学で開講されている講義です。受講生の成果発表や授業の紹介を行っています。`,
    author: `utokyo-design`,
    image: `src/images/ogp.jpg`
  },
  pathPrefix: "/utokyodesign_kom20",
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
