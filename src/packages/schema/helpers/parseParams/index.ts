export default function (params) {
  if (typeof params === 'string' || typeof params === 'object') {
    return [params]
  }
  return params
}
