export default function (params) {
  if (typeof params === 'string' || typeof params === 'number') {
    return [params]
  }
  if (typeof params === 'object') {
    return Object.values(params)
  }
  if (Array.isArray(params)) {
    return params
  }
  return []
}
