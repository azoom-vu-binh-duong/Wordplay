import commonWords from './common'

export const checkValidWord = (word: string) => commonWords.includes(word)

export const getRandomWord = (length: number) => {
  const words = commonWords.filter((word) => word.length === length)

  return words[Math.floor(Math.random() * words.length)]
}
