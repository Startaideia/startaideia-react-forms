import styled from 'styled-components'
import { mountTheme } from 'web/utils'

export const Field = styled.div`
  display: inline-block;
  position: relative;
  ${mountTheme('field')}
`

export const Input = styled.input`
  ${mountTheme('input')}
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

export const Dropdown = styled.ul`
  position: absolute;
  z-index: 1;
  width: 100%;
  max-height: 300px;
  overflow-y: scroll;
  ${mountTheme('dropdown')}
`

export const Group = styled.div`
  display: flex;
`

export const Addon = styled.div`
  ${mountTheme('addon')}
`
