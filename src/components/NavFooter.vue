<template>
  <footer class="footer">
    <p class="footer__details">
      <strong>ADP-FCC</strong>
      by
      <a :href="this.$options.adp" class="footer-anchor">Adam Ponting.</a> View
      my
      <a :href="this.$options.gitHub" target="_blank" class="footer-anchor"
        >GitHub.</a
      >
      The source code is licensed
      <a :href="this.$options.MIT" target="_blank" class="footer-anchor"
        >MIT.</a
      >
      The website content is licensed
      <a :href="this.$options.licence" target="_blank" class="footer-anchor"
        >CC BY NC SA 4.0.</a
      >
      <br />
      <a href="#" class="footer-anchor">Return to top</a>
    </p>
  </footer>
</template>

<script>
export default {
  adp: 'mailto:adamponting@outlook.com',
  MIT: 'http://opensource.org/licenses/mit-license.php',
  gitHub: 'https://github.com/Mada75',
  licence: 'http://creativecommons.org/licenses/by-nc-sa/4.0/'
}
</script>

<style lang="scss" scoped>
.footer {
  border-top: 1px solid black;
}
.footer__details {
  text-align: center;
  padding: 1rem;
  font-size: 0.9rem;
}
.footer-anchor {
  color: green;
  &:hover {
    text-decoration: underline;
  }
}
@media screen and (min-width: 800px) {
  .footer__details {
    font-size: 1.3rem;
  }
}
</style>
