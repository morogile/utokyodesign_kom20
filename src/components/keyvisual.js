import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const Keyvisual = ({ className }) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "keyvisual.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const imageData = data.desktop.childImageSharp.fluid;
  return (
    <>
      <BackgroundImage
        Tag="section"
        className={className}
        fluid={imageData}
      />
    </>
  )
}

const KeyvisualWrapper = styled(Keyvisual)`
  width: 100vw;
  height: 45vw;
  background-size: cover;
  -ms-background-position-x: center;
  -ms-background-position-y: center;
  background-position: center;
  @media (max-width: 960px) {
    transform: scale(1.1);
  }
  @media (max-width: 500px) {
    height: 350px;
  }
`

export default KeyvisualWrapper;