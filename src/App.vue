<template>
  <div id="app">
    <nav-bar />
    <section class="router-view">
      <router-view />
    </section>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.router-view {
  margin-top: 58px;
}
p {
  margin: 2rem;
}
</style>
