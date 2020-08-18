import React from "react"
import get from "lodash.get"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import styled from "styled-components"

export function Image({ data }) {
  Image.propTypes = {
    data: PropTypes.object.isRequired,
  }
  return (
    data.image &&
    data.image.childImageSharp && (
      <ImageWrapper>
        <Img fluid={data.image.childImageSharp.fluid} />
      </ImageWrapper>
    )
  )
}

const ImageWrapper = styled.div`
  overflow: hidden;
`

export const ImageBlock = {
  label: "Image",
  name: "image",
  key: "test",
  defaultItem: {
    image: "",
  },
  fields: [
    {
      label: "Image",
      name: "image",
      component: "image",
      parse: (filename) => `../images/${filename}`,
      uploadDir: () => `/content/images/`,
      previewSrc: (formValues, fieldProps) => {
        const pathName = fieldProps.input.name.replace("rawJson", "jsonNode")
        const imageNode = get(formValues, pathName)
        if (!imageNode || !imageNode.childImageSharp) return ""
        return imageNode.childImageSharp.fluid.src
      },
    },
  ],
}
