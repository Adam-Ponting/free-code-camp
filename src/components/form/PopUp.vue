<template>
  <div class="pop-up">
    <p class="pop-up__text">Thank you, your booking has been submitted</p>
    <span @click="closePopUp" title="Close" class="pop-up__icon">&#10006;</span>
  </div>
</template>

<script>
export default {
  props: {
    submitted: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    closePopUp() {
      this.$emit('close-pop-up')
    }
  }
}
</script>

<style lang="scss" scoped>
.pop-up {
  position: fixed; // to bottom
  bottom: 0;
  left: 0;
  width: 100%;
  font-size: 1.5rem;
  padding: 1rem;
  background: greenyellow;
  display: flex;
  flex-flow: row nowrap;
  text-align: center;
  justify-content: space-between; // push apart
  align-items: center;
  cursor: default;
  .pop-up__text {
    margin: auto; // flex > move to center
  }
  .pop-up__icon {
    cursor: pointer;
    padding: 0 0 0 1rem; // padding from text
  }
}
</style>
