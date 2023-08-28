export function isZipCode(input: string) {
  const zipCodeRegex = /^\d{5}$/
  return zipCodeRegex.test(input)
}
