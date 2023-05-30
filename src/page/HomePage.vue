<script lang="ts">
  import { defineComponent } from 'vue'
  import ErrorCom from '../views/ErrorCom.vue'
  export default defineComponent({
    name: 'Home',
    components: {
      ErrorCom,
    },
  })
</script>
<template>
  <h1>This is home page</h1>
  <ErrorCom test-text="1" />
</template>
<style></style>
