<script lang="ts" setup>
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

function toggleSwitch() {
  emit('update:modelValue', !props.modelValue)
}
</script>
<template>
  <div class="app-switch" @click="toggleSwitch">
    <input
      type="checkbox"
      class="input"
      :class="{ '-checked' : modelValue }"
    />
    <span class="slider"></span>
  </div>
</template>
<style lang="scss" scoped>
.app-switch {
  position: relative;
  display: inline-block;
  width: 48px;
  height: 26px;
  > .input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  > .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;
  }

  > .slider:before {
    position: absolute;
    content: '';
    height: 20px;
    width: 20px;
    left: 4px;
    bottom: 3px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }

  .input.-checked + .slider {
    background-color: #2196f3;
  }

  .input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  .input.-checked + .slider:before {
    -webkit-transform: translateX(21px);
    -ms-transform: translateX(21px);
    transform: translateX(21px);
  }
}
</style>
