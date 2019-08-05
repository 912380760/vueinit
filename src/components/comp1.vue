<template>
    <div>

    </div>
</template>

<script>
    console.log($vue)
    export default {
        name: "comp1.vue",
        mounted() {
            console.log(this.Bus)
            // this.$bus.$emit('add-todo', {text: '123'})
        },
    }
</script>

<style scoped>

</style>
