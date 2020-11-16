import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default ({ filename, alt }) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);
  const image = data.images.edges.find(n => {
    return n.node.relativePath.includes(filename);
  })
  if (!image) {return null;}
  return <Img fluid={image.node.childImageSharp.fluid} alt={alt} />
}