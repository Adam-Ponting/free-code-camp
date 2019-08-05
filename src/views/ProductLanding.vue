<template>
  <div class="product-landing">
    <nav-bar />
    <welcome-apple />
  </div>
</template>

<script>
import NavBar from '@/components/product-landing/NavBar.vue'
import WelcomeApple from '@/components/product-landing/WelcomeApple.vue'
export default {
  components: {
    NavBar,
    WelcomeApple
  }
}
</script>

<style lang="scss" scoped>
.product-landing {
  color: white;
}
</style>
