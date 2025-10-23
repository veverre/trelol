<script setup>
defineProps({
    type: {
        type: String,
        default: 'text'
    },
    placeHolder: {
        type: String,
        default: ''
    }
});
const modelValue = defineModel();
</script>

<template>
    <input 
        v-model="modelValue"
        :type="type"
        class="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
        v-bind="$attrs"
    />
</template>
