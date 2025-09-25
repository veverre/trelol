<script setup>
defineProps({
    type: {
        type: String,
        default: 'text'
    },
    modelValue: {
        type: [String, Number],
        default: ''
    },
    placeHolder: {
        type: String,
        default: ''
    }
});
defineEmits(['update:modelValue']);
</script>

<template>
    <input 
        :type="type" 
        :value="modelValue" 
        @input="$emit('update:modelValue', $event.target.value)"
        class="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
        v-bind="$attrs"
    />
</template>
