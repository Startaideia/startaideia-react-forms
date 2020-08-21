import styled from "styled-components"
import { get } from "theme"

export const Container = styled.div`
  font-family: ${get("fonts.body")};
  display: flex;
  color: ${get("colors.black")};

  &:hover {
    cursor: pointer;
  }
`

export const Box = styled.div`
  height: 15px;
  width: 15px;
  border: 2px solid ${get("colors.black")};
  border-radius: 5px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${get("colors.transparent")};
  transition: linear 0.25s;
  margin-right: 10px;

  &:hover {
    border-color: ${get("colors.primary")};
  }

  &.checked {
    background: ${get("colors.primary")};
    color: ${get("colors.white")};
    border-color: ${get("colors.primary")};
  }
`
