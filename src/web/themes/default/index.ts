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
      touched: ``
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
    }
  }
}
