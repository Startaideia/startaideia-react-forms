import styled from "styled-components"
import { get } from "theme"

const Dropdown = styled.ul`
  position: absolute;
  width: 100%;
  height: auto;
  max-height: 100px;
  top: 40px;
  left: 0px;
  background: ${get("colors.white")};
  border: 1px solid #e6e6e6;
  z-index: 9;
  padding: 0;
  list-style: none;
  font-family: ${get("fonts.body")};
  font-size: ${get("fontSize.sm")};
  display: none;

  &.has-focus {
    display: block;
  }

  li {
    padding: 8px 10px;
    color: ${get("colors.black")};

    &:hover {
      cursor: pointer;
      background: ${get("colors.primary")};
      color: ${get("colors.white")};
    }
  }

  ${get("components.dropdown")};
`

export default Dropdown
