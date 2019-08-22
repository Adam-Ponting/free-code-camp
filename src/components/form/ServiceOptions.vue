<template>
  <div id="serviceOptions">
    <article class="service-options">
      <h2>servicing options</h2>
      <p>Book your bike in for a service in just a few clicks. Choose from:</p>
      <h3>bronze service</h3>
      <p>
        Full safety check, frame and forks wiped down and checked for alignment,
        gears and brakes adjusted, chain checked and lubricated, wheels and
        tyres inspected for wear.
      </p>
      <h3>silver service</h3>
      <p>
        <strong>Bronze</strong> service plus: <br />
        Drivetrain(chain, cassette and chainset) removed, cleaned and refitted,
        bottom bracket checked, headset checked and adjusted, wheels trued and
        hub bearings adjusted(if necessary).
      </p>
      <h3>gold service</h3>
      <p>
        <strong>Silver</strong> service plus: <br />
        Full strip down to the frame and forks, frame and disc mounts faced(if
        applicable,) headset and bottom bracket removed and serviced(if
        applicable), wheel hubs disassembled and serviced.
      </p>
      <h3>Components &amp; parts</h3>
      <p>
        All services exclude the cost of replacement parts. We replace like for
        like where possible and will always discuss any additional costs before
        proceeding.
      </p>
    </article>
    <a
      href="#bookService"
      v-scroll-to="{ el: '#bookService', offset: -100 }"
      class="form__button"
      >Book a service</a
    >
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.form__button {
  display: block;
  margin: 2rem auto;
  width: fit-content;
  padding: 0.5rem 1rem;
  background-color: rgb(124, 124, 235);
  border: none;
  text-align: center;
  color: white;
  &:hover {
    cursor: pointer;
  }
}

div {
  background: white;
  padding: 4rem 0;
}
.service-options {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  color: #413c3c;
}
h2 {
  font-size: 2rem;
  text-transform: capitalize;
  padding: 1rem 0 0.25rem;
}
h3 {
  text-transform: capitalize;
  padding: 1rem 0 0.25rem;
}
</style>
