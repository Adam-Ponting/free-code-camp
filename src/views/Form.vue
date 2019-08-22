<template>
  <div class="form-component">
    <form-input />
    <service-options />
  </div>
</template>

<script>
// @ is an alias to /src
import FormInput from '@/components/form/FormInput.vue'
import ServiceOptions from '@/components/form/ServiceOptions.vue'
export default {
  components: {
    FormInput,
    ServiceOptions
  }
}
</script>
<style lang="scss" scoped>
.form-component {
  background: #faf6f6;
  padding-bottom: 1px;
}
</style>
