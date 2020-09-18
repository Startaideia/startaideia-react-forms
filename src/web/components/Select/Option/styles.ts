import styled from 'styled-components'
import { mountTheme } from 'web/utils'

export const Item = styled.div`
  font-family: 'Ubuntu', sans-serif;
  padding: 10px;

  &:hover {
    background: #e6e6e6;
    cursor: pointer;
  }

  ${mountTheme('item')}
`
