export default function (value: string): string {
  return value.replace(/[^\d\p{L}]/g, '')
}
