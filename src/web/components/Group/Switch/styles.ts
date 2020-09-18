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
  border-radius: 15px;
  position: relative;
  margin-right: 8px;
  height: 15px;
  width: 30px;
  padding: 1px;

  .pill {
    border: 1px solid #999;
    border-radius: 50%;
    position: absolute;
    background: #777;
    transition: 0.25s;
    height: 11px;
    width: 11px;
    left: 1px;

    &.actived {
      left: 15px;
    }
  }
`
