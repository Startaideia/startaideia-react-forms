export default {
  components: {
    field: {
      default: `
        padding-top: 15px;
        width: 100%;
      `,
      focus: ``,
      invalid: ``,
      valid: ``,
      touched: ``
    },
    input: {
      default: `
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 16px;
        outline: none;
        padding: 10px;
        width: 100%;
      `,
      focus: `
        border: 2px solid #4299E1;
      `,
      invalid: ``,
      valid: ``,
      touched: ``,
      prepend: `
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
      `,
      append: `
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
      `
    },
    label: {
      default: `
        font-family: "Ubuntu", sans-serif;
        margin-bottom: 10px;
        display: block;
      `,
      focus: ``,
      invalid: `
        color: #e53e3e;
      `,
      valid: ``,
      touched: ``
    },
    error: {
      default: `
        font-family: "Ubuntu", sans-serif;
        padding-top: 3px;
        font-size: 12px;
        color: #e53e3e;
      `,
      focus: ``,
      invalid: ``,
      valid: ``,
      touched: ``
    },
    help: {
      default: `
        font-family: "Ubuntu", sans-serif;
        padding-top: 3px;
        font-size: 12px;
        color: #999;
      `,
      focus: ``,
      invalid: ``,
      valid: ``,
      touched: ``
    },
    button: {
      default: `
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
    },
    addon: {
      default: `
        display: flex;
        align-items: center;
        justify-content: center;
        background: #e6e6e6;
        border: 1px solid #ccc;
        font-family: 'Ubuntu', sans-serif;
        max-width: 50px;
        min-width: 50px;
      `,
      prepend: `
        border-radius: 5px 0px 0px 5px;
        border-width: 1px 0px 1px 1px;
      `,
      append: `
        border-radius: 0px 5px 5px 0px;
        border-width: 1px 1px 1px 0px;
      `
    },
    dropdown: {
      default: `
        border: 1px solid #ccc;
        visibility: hidden;
        background: #fff;
      
        &.visible {
          visibility: visible;
        }
      `
    }
  }
}
