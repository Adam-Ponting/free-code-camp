<template>
  <article>
    <h5 class="header header--medium">Project: Form</h5>
    <p class="p-text">
      Build an app functionally similar to
      <a
        href="https://codepen.io/freeCodeCamp/full/VPaoNP"
        target="_blank"
        class="anchor anchor--fcc"
        title="Open example project"
        >this</a
      >
      example
    </p>
    <h5 class="header header--small">What I learnt:</h5>
    <p class="p-text">
      Capturing user input is a massive part of web development and this is a
      project designed around developing those skills. I settled on a bike
      service booking form that incorperates various user inputs and made use of
      <strong>Vue's v-bind</strong> directive to bind user input to data.
    </p>
    <p class="p-text">
      The layout is using
      <strong>flexbox</strong> and I am happy with the final layout after lots
      of tweaking I finaly decided to have a 50/50 screen split between labels
      and inputs on larger displays.
    </p>
    <p class="p-text">
      I make use of
      <strong>dynamic</strong> CSS - computed classes and styles, for user
      inputs/completed/required fields and do basic form validation with success
      and error notifications.
    </p>
  </article>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
