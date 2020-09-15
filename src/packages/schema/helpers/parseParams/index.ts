export default function (params) {
  if (['string', 'object', 'number'].indexOf(typeof params) !== -1) {
    return [params]
  }

  if (Array.isArray(params)) return params

  return params ? [{}] : false
}
