<script setup>
import { storeToRefs } from 'pinia'

const gameStore = useGameStore()
const { lengthOfWord, guess } = storeToRefs(gameStore)

const getClassOfLetter = (letter) => {
  const status = letter?.status
  const index = letter?.id % lengthOfWord.value
  return status === GuessLetterStatus.Default
    ? status + ' -active'
    : status + ' -submitted' + ` transition-delay-${index * 400}`
}
</script>

<template>
  <div class="guess-words">
    <div
      v-for="letter in NUMBER_OF_GUESS * lengthOfWord"
      class="letter"
      :class="getClassOfLetter(guess[letter - 1])"
    >
      <div class="text">
        {{ guess[letter - 1]?.letter }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes typing {
  0% {
    scale: 1.05;
  }
  25% {
    scale: 0.95;
  }
  50% {
    scale: 1.05;
  }
  75% {
    scale: 0.95;
  }
  100% {
    scale: 1;
  }
}

.guess-words {
  display: grid;
  grid-template-columns: repeat(v-bind(lengthOfWord), 1fr);
  gap: 5px;
  > .letter {
    width: 52px;
    height: 52px;
    border: 2px solid $letter-wrong-bg-color;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    font-weight: 600;
    text-transform: capitalize;
    &.-default {
      background-color: transparent;
    }

    &.-active {
      border: 2px solid $border-active-color;
      animation: typing 0.25s;
    }

    &.-wrong {
      background-color: $letter-wrong-bg-color;
      border-color: $letter-wrong-bg-color;
    }

    &.-approximately {
      background-color: $letter-approximately-bg-color;
      border-color: $letter-approximately-bg-color;
    }

    &.-correct {
      background-color: $letter-correct-bg-color;
      border-color: $letter-correct-bg-color;
    }

    &.-submitted {
      transform: rotateX(180deg);
      transition: all 0.4s;
    }
    &.-submitted .text {
      transform: rotateX(-180deg);
      transition: all 0.4s;
    }
  }
}

@for $i from 1 through 10 {
  .transition-delay-#{$i * 400},
  .transition-delay-#{$i * 400} > .text {
    transition-delay: #{$i * 400}ms !important;
  }
}
</style>
