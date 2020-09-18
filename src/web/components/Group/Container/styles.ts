import styled from 'styled-components'
import { mountTheme } from 'web/utils'

export const Field = styled.div`
  ${mountTheme('field')}
`

export const Label = styled.label`
  ${mountTheme('label')}
`

export const Error = styled.p`
  margin-bottom: 10px;
  ${mountTheme('error')}
`

export const Help = styled.p`
  margin-bottom: 10px;
  ${mountTheme('help')}
`

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
`
