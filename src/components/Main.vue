<template>
  <div class="main">
    <slot></slot>
  </div>
</template>

<style scoped>
  .main {
    padding: 1em;
  }
</style>

<script>
  export default ({
    name: 'Main',
  });
</script>
