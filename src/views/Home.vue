<template>
  <section class="home">
    <project-header />
    <project-article />
  </section>
</template>

<script>
import ProjectHeader from '@/components/home/ProjectHeader.vue'
import ProjectArticle from '@/components/home/ProjectArticle.vue'
export default {
  components: {
    ProjectArticle,
    ProjectHeader
  }
}
</script>

<style lang="scss" scoped>
/* 
https://bambielli.com/til/2018-08-19-how-to-target-child-components-with-scoped-css-in-vue/
*/
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}
/deep/ .header {
  margin: 1rem 0;
}
/deep/ .anchor {
  &:hover {
    text-decoration: underline;
  }
}
/deep/ .anchor--fcc {
  color: green;
}
/deep/ .header--large {
  font-size: 2rem;
  text-align: center;
}
/deep/ .header--medium {
  font-size: 1.5rem;
  text-align: center;
}
/deep/ .header--small {
  font-size: 1.2rem;
  text-align: left;
}
/deep/ .p-text {
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 0.5rem 0;
}
/deep/ .logo {
  height: 1rem;
}
@media screen and (min-width: 800px) {
  /deep/ .header--large {
    font-size: 3rem;
  }
  /deep/ .header--medium {
    font-size: 2.2rem;
  }
  /deep/ .header--small {
    font-size: 1.8rem;
  }
  /deep/ .p-text {
    font-size: 1.3rem;
  }
  /deep/ .logo {
    height: 1.5rem;
  }
}
</style>
