import load from '../load'

export default function (component: string) {
  return function ({ theme }) {
    return `
    ${load(`components.${component}.default`)({ theme })}
    &.invalid {
      ${load(`components.${component}.invalid`)({ theme })}
    }
    &.valid {
      ${load(`components.${component}.valid`)({ theme })}
    }
    &.touched {
      ${load(`components.${component}.touched`)({ theme })}
    }
    &.focus {
      ${load(`components.${component}.focus`)({ theme })}
    }
    &.append {
      ${load(`components.${component}.append`)({ theme })}
    }
    &.prepend {
      ${load(`components.${component}.prepend`)({ theme })}
    }
    `
  }
}
