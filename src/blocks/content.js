import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

export function Content({ data, html }) {
  Content.propTypes = {
    data: PropTypes.object.isRequired,
    html: PropTypes.string.isRequired,
  }
  const centered = data.center ? data.center : false
  return (
    <StyledContent
      center={centered}
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  )
}

const StyledContent = styled.div`
  ${(props) =>
    props.center &&
    css`
      text-align: center;
    `};
`

export const ContentBlock = {
  label: "Content",
  name: "content",
  key: "test",
  defaultItem: {
    content: "",
    center: false,
  },
  fields: [
    { name: "content", label: "Content", component: "markdown" },
    { name: "center", label: "Center", component: "toggle" },
  ],
}
