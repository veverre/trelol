<script setup>
import { defineProps, defineEmits, computed } from 'vue'

const props = defineProps({
  type: { type: String, default: 'button' },
  variant: { type: String, default: 'primary' },
  typeBtn: { type: String, default: 'plain' },
  disabled: { type: Boolean, default: false },
  icon: { type: String },
})

const emit = defineEmits(['click'])

const buttonClassMap = {
  primary: {
    plain: 'bg-blue-600 text-white hover:bg-blue-700 border-none',
    outlined: 'border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent',
    link: 'text-blue-600 underline hover:text-blue-800 bg-transparent border-none',
  },
  secondary: {
    plain: 'bg-gray-600 text-white hover:bg-gray-700 border-none',
    outlined: 'border border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white bg-transparent',
    link: 'text-gray-600 underline hover:text-gray-800 bg-transparent border-none',
  },
  danger: {
    plain: 'bg-red-600 text-white hover:bg-red-700 border-none',
    outlined: 'border border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-transparent',
    link: 'text-red-600 underline hover:text-red-800 bg-transparent border-none',
  },
  success: {
    plain: 'bg-green-600 text-white hover:bg-green-700 border-none',
    outlined: 'border border-green-600 text-green-600 hover:bg-green-600 hover:text-white bg-transparent',
    link: 'text-green-600 underline hover:text-green-800 bg-transparent border-none',
  },
}
const buttonClasses = computed(() => {
  if (props.disabled) {
    return 'bg-gray-200 text-gray-400 cursor-not-allowed border-none'
  }
  const variant = buttonClassMap[props.variant] || buttonClassMap.primary
  return variant[props.typeBtn] || variant.plain
})
</script>

<template>
  <button :type="type" :class="[
    'px-4 py-2 rounded text-base font-medium transition-colors duration-200 focus:outline-none cursor-pointer',
    buttonClasses
  ]" :disabled="disabled" @click="$emit('click')">
    <i v-if="icon" :class="['pi', icon]"></i>
    <slot />
  </button>
</template>