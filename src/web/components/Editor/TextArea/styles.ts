import styled from 'styled-components'
import { mountTheme } from 'web/utils'

export const Field = styled.div`
  ${mountTheme('field')}
`

export const Label = styled.label`
  ${mountTheme('label')}
`

export const Error = styled.p`
  ${mountTheme('error')}
`
export const Help = styled.p`
  ${mountTheme('help')}
`

export const Input = styled.textarea`
  resize: none;
  margin-top: 10px;
  ${mountTheme('input')}
`
