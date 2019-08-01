<template>
  <footer class="footer">
    <p class="footer__details">
      <strong>ADP-FCC</strong>
      by
      <a
        href="https://adp-cv.web.app/"
        target="_blank"
        title="Open https://adp-cv.web.app/"
        class="footer-anchor"
        >Adam Ponting.</a
      >
      View my
      <a
        href="https://github.com/Mada75"
        target="_blank"
        title="Open https://github.com/Mada75"
        class="footer-anchor"
        >GitHub.</a
      >
      The source code is licensed
      <a
        href="http://opensource.org/licenses/mit-license.php"
        title="Open http://opensource.org/licenses/mit-license.php"
        target="_blank"
        class="footer-anchor"
        >MIT.</a
      >
      The website content is licensed
      <a
        href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
        title="Open http://creativecommons.org/licenses/by-nc-sa/4.0/"
        target="_blank"
        class="footer-anchor"
        >CC BY NC SA 4.0.</a
      >
      <br />
      <a href="#" class="footer-anchor">Return to top</a>
    </p>
  </footer>
</template>

<script>
export default {}
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
