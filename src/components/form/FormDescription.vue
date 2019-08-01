<template>
  <article class="intro">
    <img
      src="@/assets/form/repair-logo.png"
      alt="repair logo"
      class="repair-logo"
    />
    <div class="intro-text-container">
      <p class="intro__text">
        Servicing is important to us – as cyclists we know that keeping a bike
        in tip-top condition and working as it should makes every ride more
        enjoyable.
      </p>
      <p class="intro__text">
        Here you will find all the information you need on bike servicing – from
        a quick check up to a full strip down – whatever your needs, we’ve got
        it covered.
      </p>
    </div>
    <h2 class="service-title">book a service</h2>
  </article>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.intro {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
}
.intro__text {
  font-size: 1.3rem;
  padding: 1rem 0;
}
.intro-text-container {
  flex: 1 1 70%;
}
.repair-logo {
  flex: 0 1 30%;
  width: 200px;
  padding-right: 1rem;
}
.service-title {
  text-transform: capitalize;
  font-variant: small-caps;
  color: black;
  padding: 1rem 0;
  font-size: 2rem;
  border-bottom: 3px solid orangered;
  width: 100%;
}
@media screen and (max-width: 800px) {
  .repair-logo {
    margin: 0 auto;
    padding-right: 0;
  }
  .service-title {
    padding: 0.5rem 0;
    font-size: 1.5rem;
  }
}
</style>
