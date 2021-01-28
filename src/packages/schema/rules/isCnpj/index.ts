import { removeMask } from 'packages/masks'

const invalidCnpj = [
  '00000000000000',
  '11111111111111',
  '22222222222222',
  '33333333333333',
  '44444444444444',
  '55555555555555',
  '66666666666666',
  '77777777777777',
  '88888888888888',
  '99999999999999'
]

export default function (value: string) {
  const cnpj = removeMask(value)
  if (cnpj === '' || cnpj.length !== 14 || invalidCnpj.indexOf(cnpj) !== -1) {
    return false
  }

  // Valida DVs
  let tamanho = cnpj.length - 2
  let numeros: any = cnpj.substring(0, tamanho)
  const digitos = cnpj.substring(tamanho)
  let pos = tamanho - 7
  let soma = 0

  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--
    if (pos < 2) pos = 9
  }

  let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11)
  if (resultado.toString() !== digitos.charAt(0)) {
    return false
  }

  tamanho = tamanho + 1
  numeros = cnpj.substring(0, tamanho)
  soma = 0
  pos = tamanho - 7

  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--
    if (pos < 2) pos = 9
  }

  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11)
  if (resultado.toString() !== digitos.charAt(1)) {
    return false
  }

  return true
}
