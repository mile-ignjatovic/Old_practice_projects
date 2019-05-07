<template>
    <div class="container">
        <div class="row">
            <div
                class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
            >
                <h1>Filters & Mixins</h1>
                <p>{{ text | toUppercase | toLowercase }}</p>
                <hr />
                <button @click="fruits.push('berries')">Add new item</button>
                <input v-model="filterText" type="text" />
                <ul>
                    <li v-for="(fruit, i) in filteredFruits" :key="i">
                        {{ fruit }}
                    </li>
                </ul>
                <app-list></app-list>
            </div>
        </div>
    </div>
</template>

<script>
import List from './List.vue'
import { fruitMixin } from './mixin.js'
export default {
    data() {
        return {
            text: 'Hello filter!',
        }
    },
    filters: {
        toUppercase: function (value) {
            return value.toUpperCase();
        }
    },
    components: {
        appList: List,
    },
    mixins: [fruitMixin],
    created() {
        console.log('root created')
    }
}
</script>

<style>
</style>
