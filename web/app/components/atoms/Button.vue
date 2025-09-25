<script setup>
    import { defineProps, defineEmits, computed } from 'vue'

    const props = defineProps({
        variant: {
            type: String,
            default: 'primary', // 'primary', 'secondary', 'danger'
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    })

    defineEmits(['click'])

    const variantClasses = computed(() => {
        if (props.disabled) return ''
        switch (props.variant) {
            case 'secondary':
                return 'bg-gray-600 text-white hover:bg-gray-700'
            case 'danger':
                return 'bg-red-600 text-white hover:bg-red-700'
            default:
                return 'bg-blue-600 text-white hover:bg-blue-700'
        }
    })
</script>

<template>
    <button :class="[
        'px-4 py-2 rounded text-base font-medium transition-colors duration-200 focus:outline-none',
        variantClasses,
        disabled ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : ''
    ]" :disabled="disabled" @click="$emit('click')">
        <slot />
    </button>
</template>
