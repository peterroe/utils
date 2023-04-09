const set = new Set()
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

export function randomString(length = 6): string {
  let result = ''
  const charactersLength = characters.length
  for (let i = 0; i < length; i++)
    result += characters.charAt(Math.floor(Math.random() * charactersLength))

  if (set.has(result)) {
    return randomString(length)
  }
  else {
    set.add(result)
    return result
  }
}
