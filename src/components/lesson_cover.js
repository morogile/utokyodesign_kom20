import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const LessonCover = ({ className }) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "lesson_cover.jpg" }) {
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

const LessonCoverWrapper = styled(LessonCover)`
  width: 100vw;
  height: 20vw;
  background-size: cover;
  background-image: url(${props => props.link});
  -ms-background-position-x: center;
  -ms-background-position-y: center;
  background-position: center;
  @media (max-width: 375px) {
    height: 100px;
  }
`

export default LessonCoverWrapper;