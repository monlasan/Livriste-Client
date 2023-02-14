<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <input
    type="text"
    v-bind="$attrs"
    @input="$emit('update:modelValue', $event.target.value)"
    :value="modelValue"
  />
</template>
