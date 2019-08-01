<template>
  <article v-html="text" class="tribute-text"></article>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
/* 
https://github.com/vuejs/vue-loader/issues/749
https://medium.com/@brockreece/scoped-styles-with-v-html-c0f6d2dc5d8e
 */
.tribute-text {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  color: lighten($color: pink, $amount: 11%);
  text-indent: 2rem;
  font-size: 1rem;
  line-height: 1.5rem;
}
/deep/ .tribute-synopsis__header {
  text-align: center;
}
/deep/ .tribute__paragraph {
  &::first-letter {
    font-size: 2rem;
  }
  margin: 0.5rem 0;
}
@media screen and(max-width:800px) {
  /deep/ .tribute-synopsis__header {
    text-align: center;
  }
  /deep/ .tribute__paragraph {
    &::first-letter {
      font-size: 2rem;
    }
    margin: 0.5rem 0;
  }
}
</style>
