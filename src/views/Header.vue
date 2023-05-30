<template>
  <div class="menu">
    <p class="item-menu">Home</p>
    <p class="item-menu">About Us</p>
    <p class="item-menu">Contact</p>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'MainHeader',
  }
</script>

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
