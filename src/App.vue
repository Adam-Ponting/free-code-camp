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
.router-view {
  margin-top: 58px;
  background: #eee;
}
</style>
