<template>
  <div class="product-landing">
    <!--     <nav-bar />
    -->
    <product-page />
  </div>
</template>

<script>
/* import NavBar from '@/components/product-landing/NavBar.vue'
 */ import ProductPage from '@/components/product-landing/ProductPage.vue'
export default {
  components: {
    /*     NavBar,
     */ ProductPage
  }
}
</script>

<style lang="scss" scoped>
.product-landing {
  color: white;
}
</style>
