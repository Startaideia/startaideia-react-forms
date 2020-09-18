import styled from 'styled-components'

export const Container = styled.div`
  font-family: 'Ubuntu', sans-serif;
  align-items: center;
  padding: 5px 0px;
  display: flex;

  &:hover {
    cursor: pointer;
  }
`

export const Circle = styled.div`
  border: 1px solid #999;
  border-radius: 2px;
  margin-right: 8px;
  height: 15px;
  width: 15px;
  padding: 1px;

  .filled {
    border-radius: 2px;
    background: #777;
    height: 11px;
    width: 11px;
  }
`
