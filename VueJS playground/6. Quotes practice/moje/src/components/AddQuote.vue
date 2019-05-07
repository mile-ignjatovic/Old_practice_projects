<template>
    <div>
        <span>Quote</span>
        <textarea v-model="text"></textarea>
        <button class="btn" @click="addQuote">Add quote</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            text: ''
        }
    },
    methods: {
        addQuote() {
            if (this.text !== undefined && this.text !== '') {
                this.$emit('quoteAdded', this.text);
            }
        }
    },
}
</script>

<style scoped>
div {
    display: flex;
    width: 60%;
    flex-direction: column;
    align-items: center;
    margin: auto;
}
span {
    align-self: flex-start;
    margin: 1rem;
}
button {
    color: #fff;
    background-color: #337ab7;
    border-color: #2e6da4;
    margin: 1rem;
}
textarea {
    height: 6rem;
    width: 100%;
}
</style>