/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import { Footer } from "./footer"
import image from "../images/ogp.jpg"
import SEO from "./seo"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <SEO title={"東京大学グラフィックデザイン概論駒場祭サイト"} image={image}>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main style={{marginTop: "70px"}}>{children}</main>
      <Footer />
    </SEO>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
