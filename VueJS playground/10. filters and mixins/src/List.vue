<template>
    <div>
        <h1>Filters & Mixins</h1>
        <input v-model="filterText" type="text" />
        <ul>
            <li v-for="(fruit, i) in filteredFruits" :key="i">
                {{ fruit }}
            </li>
        </ul>
    </div>
</template>

<script>
import { fruitMixin } from './mixin.js'
export default {
    mixins: [fruitMixin],
    created() {
        console.log('listCreated')
    }
}
</script>

<style>
</style>
