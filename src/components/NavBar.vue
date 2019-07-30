<template>
  <nav class="nav">
    <router-link :to="{ name: 'home' }" class="nav__link">Home</router-link
    >&nbsp;|&nbsp;
    <router-link :to="{ name: 'tribute' }" class="nav__link"
      >Tribute</router-link
    >&nbsp;|&nbsp;
    <router-link :to="{ name: 'copy' }" class="nav__link">Copy</router-link>
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
  background: rgba(white, 0.2);

  &:hover {
    background: rgba(white, 0.9);
  }
}
.nav__link {
  font-weight: bold;
  padding: 1rem;
  color: #2c3e50;

  &.router-link-exact-active {
    color: #42b983;
  }
}
@media screen and (max-width: 800px) {
  .nav {
    background: white;
  }
}
</style>
