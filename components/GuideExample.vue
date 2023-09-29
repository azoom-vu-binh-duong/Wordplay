<script setup>
defineProps({
  word: {
    type: Array,
    required: true,
  },
})

</script>
<template>
  <div class="guide-example">
    <div v-for="letter in word" class="letter" :class="letter.status">
      {{ letter.letter }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.guide-example {
  display: grid;
  width: fit-content;
  grid-template-columns: repeat(5, 1fr);
  gap: 5px;
  > .letter {
    width: 32px;
    height: 32px;
    border: 2px solid $letter-wrong-bg-color;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    font-weight: 600;
    text-transform: capitalize;
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
  }
}
</style>
