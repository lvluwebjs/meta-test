<template>
  <div>
    <div>我是{{this.$route.meta.title}}</div>
    <Nav />
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from "./nav.vue";

export default {
  components: {
    Nav,
  },
};
</script>

<style scoped>

</style>
