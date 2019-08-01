<template>
  <div class="product-landing">
    <nav-bar />
  </div>
</template>

<script>
import NavBar from '@/components/product-landing/NavBar.vue'
export default {
  components: {
    NavBar
  }
}
</script>

<style lang="scss" scoped>
.product-landing {
  background: #212529;
  color: white;
}
</style>
