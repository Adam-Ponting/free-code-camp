<template>
  <div id="app">
    <nav-bar />
    <section class="router-view">
      <router-view />
    </section>
    <nav-footer />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import NavFooter from '@/components/NavFooter.vue'
export default {
  components: {
    NavBar,
    NavFooter
  }
}
</script>

<style lang="scss">
.router-view {
  margin-top: 52px;
  background: #eee;
}
</style>
