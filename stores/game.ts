import { GameStatus } from '@/utils/type'

import { getRandomWord, checkValidWord } from '@/words'

export const useGameStore = defineStore('game-store', () => {
  const lengthOfWord = ref<number>(DEFAULT_WORD_LENGTH)
  const targetWord = ref<string>(getRandomWord(lengthOfWord.value))
  const guess = ref<GuessLetter[]>([])
  const isBlockedTyping = ref<boolean>(false)
  const gameStatus = ref<GameStatus>(GameStatus.Playing)

  const { showModal, hideModal } = useModalStore()

  const indexOfLetterInWord = computed(
    () => guess.value.length % lengthOfWord.value
  )

  const currentGuessWord = computed(() => {
    let letters: GuessLetter[]

    if (indexOfLetterInWord.value === 0 && isBlockedTyping.value)
      letters = guess.value.slice(-lengthOfWord.value)
    else if (indexOfLetterInWord.value === 0 && !isBlockedTyping.value)
      letters = []
    else letters = guess.value.slice(-indexOfLetterInWord.value)

    return letters.map(({ letter }) => letter).join('')
  })

  const isCorrectWord = computed(() => {
    const guessWord = guess.value
      .slice(-lengthOfWord.value)
      .map(({ letter }) => letter)
    return guessWord.join('') === targetWord.value
  })

  const initGame = (keepModal = false) => {
    if (!keepModal) hideModal()
    guess.value = []
    targetWord.value = getRandomWord(lengthOfWord.value)
    isBlockedTyping.value = false
    gameStatus.value = GameStatus.Playing
  }

  const getClassOfKeyboardLetter = (keyboardLetter: string) => {
    const guessLetter = guess.value.find(
      ({ letter }) => letter === keyboardLetter
    )
    if (!guessLetter) return ''

    return guessLetter.status
  }

  const typeLetter = (letter: string) => {
    const guessLength = guess.value.length
    const maxLetter = NUMBER_OF_GUESS * DEFAULT_WORD_LENGTH

    if (letter.match(/^[a-zA-Z]$/) && !isBlockedTyping.value) {
      guess.value.push({
        letter,
        id: guess.value.length,
        status: GuessLetterStatus.Default,
      })
      if (indexOfLetterInWord.value === 0) isBlockedTyping.value = true
      return
    }

    if (letter === 'Backspace' && currentGuessWord.value.length) {
      if (indexOfLetterInWord.value === 0) {
        isBlockedTyping.value = false
      }

      guess.value.pop()
    }

    if (
      letter === 'Enter' &&
      currentGuessWord.value.length === lengthOfWord.value
    ) {
      if (!checkValidWord(currentGuessWord.value)) {
        return alert('Invalid word')
      }

      submitGuess()
      if (isCorrectWord.value) {
        setTimeout(() => {
          gameStatus.value = GameStatus.Win
          showModal('You Win!', ModalType.Result)
        }, lengthOfWord.value * 400)
      }

      if (guessLength >= maxLetter) {
        gameStatus.value = GameStatus.Lose
        showModal('You lose!', ModalType.Result)
      }

      if (guessLength < maxLetter) isBlockedTyping.value = false
    }

    return
  }

  const submitGuess = () => {
    for (let i = 0; i < lengthOfWord.value; i++) {
      const indexOfLetterInGuessWord =
        guess.value.length - lengthOfWord.value + i

      if (
        targetWord.value[i] === guess.value[indexOfLetterInGuessWord].letter
      ) {
        guess.value[indexOfLetterInGuessWord].status = GuessLetterStatus.Correct
        continue
      }

      if (
        targetWord.value.includes(guess.value[indexOfLetterInGuessWord].letter)
      ) {
        guess.value[indexOfLetterInGuessWord].status =
          GuessLetterStatus.Approximately
        continue
      }

      guess.value[indexOfLetterInGuessWord].status = GuessLetterStatus.Wrong
    }
  }

  const giveUp = () => {
    gameStatus.value = GameStatus.Lose
    showModal('You Lose!', ModalType.Result)
  }

  const selectWordLength = (length: number) => {
    lengthOfWord.value = length
    initGame(true)
  }

  return {
    lengthOfWord,
    targetWord,
    guess,
    gameStatus,
    isBlockedTyping,
    currentGuessWord,
    initGame,
    typeLetter,
    getClassOfKeyboardLetter,
    giveUp,
    selectWordLength,
  }
})
