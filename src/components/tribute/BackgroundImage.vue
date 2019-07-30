<template>
  <div class="background-image" :style="styleObject">
    <h2 class="background-title" v-html="background.title"></h2>
  </div>
</template>

<script>
export default {
  props: {
    background: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      styleObject: {
        'background-image': `url(' ${this.background.image} ')`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.background-image {
  background-attachment: fixed;
  background-size: cover;
  background-position: left center;
  width: 100%;
  min-height: 100vh;
  display: flex;
}
.background-title {
  max-width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto; // centers in parent container
  color: white;
  font-size: 3rem;
  letter-spacing: 0.2rem;
  text-align: center;
}
/deep/ .learn-more {
  &:hover {
    text-decoration: underline;
  }
}

@media screen and (max-width: 800px) {
  .background-image {
    background-attachment: scroll;
    background-position: center;
    min-height: 300px;
  }
  .background-title {
    font-size: 1.6rem;
    padding: 0.5rem;
    letter-spacing: 0.1rem;
    background-color: rgba(17, 17, 17, 0.5);
    border-radius: 5px;
  }
}
</style>
