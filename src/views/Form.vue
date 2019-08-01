<template>
  <div class="form">
    <form-nav-bar />
    <form-description />
    <form-details />
  </div>
</template>

<script>
// @ is an alias to /src
import FormNavBar from '@/components/form/FormNavBar.vue'
import FormDescription from '@/components/form/FormDescription.vue'
import FormDetails from '@/components/form/FormDetails.vue'
export default {
  components: {
    FormDetails,
    FormNavBar,
    FormDescription
  }
}
</script>
<style lang="scss" scoped>
.form {
  background: lightsteelblue;
}
</style>
