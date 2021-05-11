<template>
  <header>
    <h2><router-link to="/" class="header">Top10ify</router-link></h2>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
  h2 {
    color: white;
    text-align: left;
    font-size: clamp(40px, 5vw, 250px);
    text-shadow: 2px 2px black;
  }
  
  .header {
    text-decoration: none;
    color: white;
  }
  .header:hover{
    color: #ABDAE1;
  }
</style>