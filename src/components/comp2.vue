<template>
    <div>

    </div>
</template>

<script>
    export default {
        name: "comp2.vue",
        mounted() {
            $vue.$on('add-todo', (params) => {
                console.log(params)
            })
        }
    }
</script>

<style scoped>

</style>
