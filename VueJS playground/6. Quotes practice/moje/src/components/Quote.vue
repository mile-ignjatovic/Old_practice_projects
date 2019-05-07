<template>
    <div>
        <span>
            {{ text }}
        </span>
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        },
    },
}
</script>

<style scoped>
div {
    border: 0.5px solid gray;
    border-radius: 3px;
}
span {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-size: 1.5rem;
    margin: 1rem;
}
</style>