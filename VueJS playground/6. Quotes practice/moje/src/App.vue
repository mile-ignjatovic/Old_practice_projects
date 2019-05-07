<template>
    <div class="container">
        <h1>Qutes Added</h1>
        <!-- progressbar -->
        <div class="progressBar-bck">
            <div
                class="progressBar"
                :style="{ width: quotes.length * 10 + '%' }"
            >
                <span>{{ quotes.length }}/10</span>
            </div>
        </div>

        <app-add-quote @quoteAdded="addQuote($event)"></app-add-quote>
        <div class="quotesContainer">
            <app-quote
                :key="index"
                v-for="(quote, index) in quotes"
                :text="quote"
                @click.native="quotes.splice(index, 1)"
            ></app-quote>
        </div>
        <div class="info">Info: click on a quote to delete it</div>
    </div>
</template>

<script>
import Quote from './components/Quote.vue';
import AddQuote from './components/AddQuote.vue';
export default {
    data() {
        return {
            quotes: []
        }
    },
    components: {
        'app-quote': Quote,
        'app-add-quote': AddQuote
    },
    methods: {
        addQuote(quote) {
            if (this.quotes.length < 10) {
                this.quotes.push(quote);
            }
        }
    }
}
</script>

<style scoped>
.progressBar-bck {
    width: 100%;
    background-color: gainsboro;
    border: 1px solid gray;
    border-radius: 3px;
}
.progressBar {
    background-color: #337ab7;
    border-color: #2e6da4;
    transition: all 0.3s;
    text-align: center;
    color: white;
}
span {
    margin: 1rem;
}
.info {
    background-color: lightskyblue;
    display: flex;
    justify-content: center;
    margin: auto;
    height: 4rem;
    align-items: center;
    border-radius: 3px;
}
.quotesContainer {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 25% 25% 25% 25%;
    grid-gap: 1rem;
}
</style>
