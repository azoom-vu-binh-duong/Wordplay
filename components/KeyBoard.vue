<script setup>
const gameStore = useGameStore()
const { getClassOfKeyboardLetter } = gameStore
</script>
<template>
  <div class="keyboard-layout">
    <div class="row">
      <div
        v-for="letter in KEYBOARD_FIRST_ROW"
        class="letter"
        :class="getClassOfKeyboardLetter(letter)"
      >
        {{ letter }}
      </div>
    </div>
    <div class="row">
      <div
        v-for="letter in KEYBOARD_SECOND_ROW"
        class="letter"
        :class="getClassOfKeyboardLetter(letter)"
      >
        {{ letter }}
      </div>
    </div>
    <div class="row">
      <div class="letter -enter">Enter</div>
      <div
        v-for="letter in KEYBOARD_THIRD_ROW"
        class="letter"
        :class="getClassOfKeyboardLetter(letter)"
      >
        {{ letter }}
      </div>
      <div class="letter -backspace">
        <Icon name="material-symbols:backspace" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.keyboard-layout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  > .row {
    display: flex;
    gap: 6px;
  }

  > .row > .letter {
    min-width: 42px;
    height: 58px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.25em;
    font-weight: bold;
    text-transform: uppercase;
    background-color: $keyboard-default-bg-color;

    &.-wrong {
      background-color: $letter-wrong-bg-color;
    }

    &.-approximately {
      background-color: $letter-approximately-bg-color;
    }

    &.-correct {
      background-color: $letter-correct-bg-color;
    }

    &.-enter,
    &.-backspace {
      padding: 0 10px;
      font-size: 12px;
    }
  }
}
</style>
