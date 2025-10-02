<script setup>
const props = defineProps({
    options: { type: Array, required: true },
    modelValue: { type: [String, Number, Object], default: null }
})

const emit = defineEmits(["update:modelValue"])

const onChange = (event) => {
  emit("update:modelValue", event.target.value)
}
</script>
<template>
    <select class="border rounded px-3 py-2" :value="modelValue" @change="onChange">
        <option value="" disabled>Sélectionnez...</option>
        <option v-for="option in options" :key="option" :value="option">
            {{ option }}
        </option>
    </select>
</template>
