<template>
  <section class="form-header">
    <h1 class="form-header__title">Bike Servicing &amp; Repairs</h1>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.form-header {
  background-image: url('../../assets/form/bg-img.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
}
.form-header__title {
  font-size: 4rem;
  color: white;
  margin: auto;
  font-variant: small-caps;
  text-align: center;
  padding: 1rem 0;
}
@media screen and (max-width: 800px) {
  .form-header__title {
    font-size: 2rem;
  }
}
</style>
