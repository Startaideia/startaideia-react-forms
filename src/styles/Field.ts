import { get } from "theme"
import styled from "styled-components"

const Field: any = styled.div`
  padding-top: 8px;
  position: relative;

  .std__append_right {
    position: absolute;
    right: 0;
    bottom: 5px;
    font-size: ${get("fontSize.lg")};
    color: ${get("colors.black")};

    &:hover {
      cursor: pointer;
    }
  }
`

export default Field
