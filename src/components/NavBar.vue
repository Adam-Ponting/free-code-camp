<template>
  <nav class="nav">
    <router-link :to="{ name: 'home' }" class="nav__link">About</router-link
    >&nbsp;|&nbsp;
    <router-link :to="{ name: 'tribute' }" class="nav__link"
      >Tribute</router-link
    >&nbsp;|&nbsp;
    <router-link :to="{ name: 'form' }" class="nav__link">Form</router-link
    >&nbsp;|&nbsp;
    <router-link :to="{ name: 'product-landing' }" class="nav__link"
      >Product Landing</router-link
    >
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.nav {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-bottom: 1px solid black;
}
.nav__link {
  font-weight: bold;
  padding: 1rem 0.5rem;
  color: black;
  &:hover {
    text-decoration: underline;
  }
  &.router-link-exact-active {
    color: green;
  }
}
@media screen and (min-width: 800px) {
  .nav__link {
    padding: 1rem;
  }
}
</style>
