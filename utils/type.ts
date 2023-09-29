export enum Mode {
  DarkMode = 1,
  LightMode = 2,
}

export enum GuessLetterStatus {
  Default = '-default',
  Wrong = '-wrong',
  Approximately = '-approximately',
  Correct = '-correct',
}

export interface GuessLetter {
  id: number
  letter: string
  status: GuessLetterStatus
}

export enum GameStatus {
  Win = 'win',
  Lose = 'lose',
  Playing = 'playing',
}

export enum ModalType {
  Result = 'result',
  Guide = 'guide',
  Settings = 'settings',
}
