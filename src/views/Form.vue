<template>
  <div class="form-component">
    <new-form-details />
  </div>
</template>

<script>
// @ is an alias to /src
import NewFormDetails from '@/components/form/NewFormDetails.vue'
export default {
  components: {
    NewFormDetails
  }
}
</script>
<style lang="scss" scoped>
.form-component {
  background: #faf6f6;
  padding-bottom: 1px;
}
</style>
