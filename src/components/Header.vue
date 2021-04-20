<template>
  <header>
    <h1><router-link to="/" class="header">Top10ify</router-link></h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
  h1 {
    color: white;
    text-align: left;
    font-size: 9vmin;
    text-shadow: 2px 2px black;
  }
  .header {
    text-decoration: none;
    color: white;
  }
</style>