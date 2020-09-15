import styled from 'styled-components'

export const Button = styled.button`
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: 0.25s;
  margin-top: 15px;
  font-size: 16px;
  outline: none;
  padding: 10px;
  width: 100%;

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: scale(1.01);
  }
`
