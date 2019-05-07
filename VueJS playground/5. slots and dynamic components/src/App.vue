<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="newPropSelected = 'app-quote'">Quote</button>
                <button @click="newPropSelected = 'app-author'">Author</button>
                <button @click="newPropSelected = 'app-new'">New</button>
                <hr />
                <p>{{ newPropSelected }}</p>
                <keep-alive>
                    <component :is="newPropSelected">
                        <h2 slot="title">{{ quoteTitle }}</h2>
                        <p>A wonderful quote!</p>
                    </component>
                </keep-alive>
                <!-- <app-quote>
                    <h2 slot="title">{{ quoteTitle }}</h2>
                    <p>A wonderful quote!</p>
                </app-quote> -->
            </div>
        </div>
    </div>
</template>

<script>
import Quote from './component/Quote.vue'
import Author from './component/Author.vue'
import New from './component/New.vue'

export default {
    data() {
        return {
            quoteTitle: 'The quote',
            newPropSelected: 'app-quote'
        }
    },
    components: {
        'app-quote': Quote,
        'app-author': Author,
        'app-new': New
    }
}
</script>

<style>
</style>
