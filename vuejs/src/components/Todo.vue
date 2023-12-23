<script setup>
import {reactive, watch} from "vue";

defineProps({
    name: {
        type: String,
        required: true
    }
})

const state = reactive({
    checked: false
})

const handleCheck = () => {
    state.checked = !state.checked;
}

watch(() => state.checked, () => {
    if (state.checked) alert('Checked!');
})
</script>

<template>
    <li :class="state.checked && 'line-through'">
        <input type="checkbox"
               :checked="state.checked"
               @input="handleCheck"
        />
        {{ name }}
    </li>
</template>

<style scoped>
.line-through {
    text-decoration: line-through;
}
</style>
