<script setup>
import Todo from "@/components/Todo.vue";

const TODOS = [
    { name: 'Coding' },
    { name: 'Assignment' },
    { name: 'Study' },
]
</script>

<template>
    <div>
        <h1>TODOS</h1>
        <ul>
            <template v-for="d in TODOS">
                <Todo :name="d.name" />
            </template>
        </ul>
    </div>
</template>

