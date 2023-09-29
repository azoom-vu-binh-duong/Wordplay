<script setup>
const example_1 = ref([
  { letter: 'C', status: GuessLetterStatus.Correct },
  { letter: 'L', status: GuessLetterStatus.Wrong },
  { letter: 'E', status: GuessLetterStatus.Wrong },
  { letter: 'A', status: GuessLetterStatus.Wrong },
  { letter: 'N', status: GuessLetterStatus.Wrong },
])

const example_2 = ref([
  { letter: 'B', status: GuessLetterStatus.Wrong },
  { letter: 'I', status: GuessLetterStatus.Approximately },
  { letter: 'N', status: GuessLetterStatus.Wrong },
  { letter: 'G', status: GuessLetterStatus.Wrong },
  { letter: 'O', status: GuessLetterStatus.Wrong },
])

const example_3 = ref([
  { letter: 'B', status: GuessLetterStatus.Wrong },
  { letter: 'A', status: GuessLetterStatus.Wrong },
  { letter: 'L', status: GuessLetterStatus.Wrong },
  { letter: 'L', status: GuessLetterStatus.Wrong },
  { letter: 'S', status: GuessLetterStatus.Wrong },
])
</script>
<template>
  <div class="game-guide">
    <h3 class="title">Guess the Word in 6 tries.</h3>
    <ul class="guides">
      <li class="guide">Type the word then press Enter to guess.</li>
      <li class="guide">Each guess must be a valid English word.</li>
      <li class="guide">
        The color of the tiles will change to show how close your guess was to
        the word.
      </li>
    </ul>
    <p class="examples">Examples</p>
    <guide-example :word="example_1" />
    <p class="text"><strong>C</strong> is in the word and in the correct spot.</p>
    <guide-example :word="example_2" />
    <p class="text"><strong>I</strong> is in the word but in the wrong spot.</p>
    <guide-example :word="example_3" />
    <p class="text"><strong>B, A, L, S</strong> is not in the word in any spot.</p>
  </div>
</template>

<style lang="scss" scoped>
.game-guide {
  padding: 32px;
  max-width: 520px;
  > .title {
    margin: 0;
  }

  > .guides {
    padding-left: 20px;
  }

  > .guides > .guide {
    margin-bottom: 5px;
  }

  > .examples {
    font-weight: 600;
  }

  > .text {
    margin: 8px 0 20px 0;
  }
}
</style>
