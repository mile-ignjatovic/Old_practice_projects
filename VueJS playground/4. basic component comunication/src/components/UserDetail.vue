<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{ name }}</p>
        <p>User surname: {{ surname }}</p>
        <p>User age: {{ userAge }}</p>
        <button @click="resetName">Reset</button>
    </div>
</template>

<script>
import { eventBus } from '../main';
export default {
    props:
    // ['name', 'surname']
    {
        name: {
            type: String,
        },
        surname: {
            type: String
        },
        userAge: Number
    },
    methods: {
        resetName() {
            this.name = 'mile';
            this.$emit('nameWasReset', this.name);
        }
    },
    created() {
        eventBus.$on('ageWasEdited', (data) => {
            this.userAge = data;
        })
    }
}
</script>

<style scoped>
div {
    background-color: lightcoral;
}
</style>
