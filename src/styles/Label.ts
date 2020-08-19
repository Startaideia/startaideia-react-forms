import styled from "styled-components"
import defaulTheme from "theme"
import _ from "lodash"

function getColor({ invalid, valid, theme }: any) {
  if (valid) {
    return _.get(theme, "successColor", defaulTheme.successColor)
  }
  if (invalid) {
    return _.get(theme, "dangerColor", defaulTheme.dangerColor)
  }
  return _.get(theme, "darkColor", defaulTheme.darkColor)
}

const Label: any = styled.label`
  margin-bottom: 5px;
  display: block;
  color: ${getColor};
`

export default Label
