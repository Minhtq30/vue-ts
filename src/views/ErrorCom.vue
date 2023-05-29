<script setup lang="ts">
  defineProps<{ test: string }>()
</script>
<template>
  <h1>404 not found{{ test }}</h1>
</template>
<style>
  .menu {
    display: flex;
    justify-content: center;
  }

  .item-menu {
    margin: 10px;
    font-size: large;
    cursor: pointer;
    font-weight: 600;
  }

  .link {
    color: inherit;
    text-decoration: none;
  }
</style>
