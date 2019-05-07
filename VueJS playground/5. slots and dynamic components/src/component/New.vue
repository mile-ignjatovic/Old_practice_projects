<template>
    <div>
        New quote
        <button @click="counter++">{{ counter }}</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            counter: 0
        }
    },
    deactivated() {
        console.log('diactivated')
    },
    activated() {
        console.log('activated')
    }
}
</script>

<style lang="scss" scoped>
</style>