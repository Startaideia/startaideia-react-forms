export default function (params) {
  if (typeof params === 'string' || typeof params === 'object') {
    return [params]
  }

  if (Array.isArray(params)) return params

  return params ? [{}] : false
}
