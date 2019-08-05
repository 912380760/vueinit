<template>
  <div class="home">
    Home Page
    <myComp1 />
    <myComp2 />
  </div>
</template>

<script>
import myComp1 from '@/components/comp1.vue';
import myComp2 from '@/components/comp1.vue';
export default {
  name: 'home',
  components: {
    myComp1,
    myComp2,
  },
  computed: {
    ...mapState(['test']),
  },

  mounted() {
    console.log(this.test)
  }
}
</script>
